interface ArticleH3ItemProps {
  heading: any;
}

export const ArticleH3Item: React.FC<ArticleH3ItemProps> = ({ heading }) => {
  return (
    <>
      <h3 className="text-xl font-semibold dark:text-white">
        {heading.map((item: any, index: any) => (
          <span key={index}>{item}</span>
        ))}
      </h3>
    </>
  );
};
