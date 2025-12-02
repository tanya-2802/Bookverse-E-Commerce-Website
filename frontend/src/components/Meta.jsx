import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'BookVerse – Explore Your Next Read',
  description: 'Discover bestsellers, fiction, mystery, romance, fantasy and more at BookVerse.',
  keywords: 'books, novels, fiction, fantasy, romance, mystery, BookVerse',
};

export default Meta;
