import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

export const VideoBlock = () => {
  const src = `${"https://www.youtube.com/embed/y8oIry02X0I"}`;
  return (
    <>
      <div className="container">
        <Collapsible accordion popout>
          <CollapsibleItem
            expanded={false}
            header="Новости проекта:"
            icon={<Icon>featured_video</Icon>}
            node="div"
          >
            <div className="video-container container">
              <iframe
                width="560"
                height="315"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CollapsibleItem>
        </Collapsible>
      </div>
    </>
  );
};
