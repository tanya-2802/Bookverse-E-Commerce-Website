import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// ------------------------
// FIX __dirname for ES Modules
// ------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------
// Load ENV
// ------------------------
dotenv.config({ path: path.join(__dirname, '.env') });
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// ------------------------
// CONNECT DATABASE
// ------------------------
connectDB();

// ------------------------
// INITIALIZE APP
// ------------------------
const app = express();

import customLogger from './middleware/customLogger.js';
app.use(customLogger);

// Morgan for logging
import morgan from 'morgan';
import cors from 'cors';

app.use(morgan('dev'));   // Morgan added
app.use(cors());          // CORS added

// ------------------------
// EJS SETUP
// ------------------------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ------------------------
// BODY PARSERS
// ------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ------------------------
// API ROUTES
// ------------------------
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

// PayPal config
app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

// ------------------------
// EJS PAGES (GUIDELINE REQUIREMENT)
// ------------------------
app.get('/ejs/home', (req, res) => {
  res.render('home');
});

app.get('/ejs/about', (req, res) => {
  res.render('about');
});

// ------------------------
// STATIC FILES
// ------------------------
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// ------------------------
// PRODUCTION BUILD HANDLING
// ------------------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running…');
  });
}

// ------------------------
// ERROR HANDLERS
// ------------------------
app.use(notFound);
app.use(errorHandler);

// ------------------------
// START SERVER
// ------------------------
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
