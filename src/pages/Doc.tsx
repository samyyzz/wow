import { Card } from "../components/ui/Card";
import { ContentNotFound } from "../components/ui/ContentNotFound";
import { MainHeader } from "../components/ui/MainHeader";
import { TagBar } from "../components/ui/TagBar";
import {
  ContentLiveOrDeleted,
  ContentProps,
  useContent,
} from "../hooks/useContent";
import { filterContentByPage } from "../utils/filterPageContent";

export const Doc = () => {
  const contents: ContentLiveOrDeleted = useContent();
  const filteredContent = filterContentByPage({
    contents,
    pageName: "Doc",
  });

  return (
    <div className="w-full h-screen pb-20 bg-gradient-to-br from-lime-300 to-lime-600">
      <div className="m-8">
        <MainHeader title="Docs" contentType="Doc" />
      </div>
      <div className="m-8 flex justify-start items-center">
        <TagBar contents={filteredContent} type="Docs" />
      </div>
      <div className="w-full gap-5 pb-20 mx-auto flex flex-wrap justify-center items-center">
        {filteredContent.length != 0 ? (
          filteredContent.map((content: ContentProps) => (
            <Card
              key={Math.floor(Math.random() * 100)}
              _id={content._id}
              theme="light"
              type={content.type}
              title={content.title}
              link={content.link}
              tags={content.tags}
              favourite={content.favourite}
              disableCard={content.disableCard}
              createdAt={content.createdAt}
              updatedAt={content.updatedAt}
            />
          ))
        ) : (
          <ContentNotFound />
        )}
      </div>
    </div>
  );
};
