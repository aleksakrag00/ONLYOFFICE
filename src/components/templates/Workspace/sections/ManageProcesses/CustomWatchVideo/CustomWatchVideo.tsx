import { useState } from "react";
import {
  StyledCustomWatchVideo,
  StyledCustomWatchVideoImg,
  StyledCustomWatchVideoWrapper,
  StyledCustomWatchVideoHeading,
  StyledCustomWatchVideoModal,
} from "./CustomWatchVideo.styled";
import { ICustomWatchVideo } from "./CustomWatchVideo.types";
import { Modal } from "@src/components/ui/Modal";

const CustomWatchVideo = ({
  id,
  className,
  videoImgUrl,
  videoUrl,
  heading,
  paragraph,
}: ICustomWatchVideo) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledCustomWatchVideo id={id} className={className}>
      <StyledCustomWatchVideoImg
        onClick={() => setIsOpen(true)}
        $videoImgUrl={videoImgUrl}
      />

      <StyledCustomWatchVideoWrapper>
        <StyledCustomWatchVideoHeading level={4} label={heading} />
        {paragraph}
      </StyledCustomWatchVideoWrapper>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="1100px"
        withCloseBtn
      >
        <StyledCustomWatchVideoModal>
          <iframe
            src={videoUrl}
            frameBorder={0}
            allow="encrypted-media"
            allowFullScreen={true}
          ></iframe>
        </StyledCustomWatchVideoModal>
      </Modal>
    </StyledCustomWatchVideo>
  );
};

export { CustomWatchVideo };
