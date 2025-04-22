import { useState } from "react";
import {
  StyledFeatureSwitcher,
  StyledFeatureSwitcherWrapper,
  StyledFeatureSwitcherBtn,
  StyledFeatureSwitcherImage,
  StyledFeatureSwitcherCustomBtn,
} from "./FeatureSwitcher.styled";
import { IFeatureSwitcher } from "./FeatureSwitcher.types";
import { ChevronDownIcon } from "@src/components/icons";

const FeatureSwitcher = ({
  id,
  className,
  items,
  imageWidth = 736,
  imageHeight = 520,
  position = "left",
  customButton,
}: IFeatureSwitcher) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledFeatureSwitcher id={id} className={className} $position={position}>
      <StyledFeatureSwitcherWrapper $position={position}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <StyledFeatureSwitcherBtn
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveTab(index);
                  }
                }}
                $active={activeTab === index}
                tabIndex={0}
                role="button"
              >
                <span>{item.label}</span>
                <ChevronDownIcon />
              </StyledFeatureSwitcherBtn>

              {activeTab === index && (
                <StyledFeatureSwitcherImage
                  $imageWidth={imageWidth}
                  $imageHeight={imageHeight}
                  $isMobile
                  $imageUrl={items[activeTab].image.url}
                  $imageUrl2x={items[activeTab].image?.url2x ?? ""}
                ></StyledFeatureSwitcherImage>
              )}
            </li>
          ))}
        </ul>
        {customButton && (
          <StyledFeatureSwitcherCustomBtn>
            {customButton}
          </StyledFeatureSwitcherCustomBtn>
        )}
      </StyledFeatureSwitcherWrapper>

      {items[activeTab] && (
        <StyledFeatureSwitcherImage
          $imageWidth={imageWidth}
          $imageHeight={imageHeight}
          $isDesktop
          $imageUrl={items[activeTab].image.url}
          $imageUrl2x={items[activeTab].image?.url2x ?? ""}
        ></StyledFeatureSwitcherImage>
      )}
    </StyledFeatureSwitcher>
  );
};

export { FeatureSwitcher };
