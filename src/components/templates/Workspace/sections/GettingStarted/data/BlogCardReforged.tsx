import {
  StyledBlogCard,
  StyledBlogCardImg,
  StyledBlogCardBody,
  StyledBlogCardWrapper,
} from "@src/components/widgets/BlogCard/BlogCard.styled";
import { IBlogCardReforged } from "./BlogCardReforged.types";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const BlogCardReforged = ({
  id,
  className,
  imgUrl,
  heading,
  text,
  links,
  isLarge,
  button,
  buttonLink,
  targetBlank,
}: IBlogCardReforged) => {
  return (
    <StyledBlogCard id={id} className={className} $isLarge={isLarge}>
      <StyledBlogCardImg $imgUrl={imgUrl} $isLarge={isLarge} />

      <StyledBlogCardBody>
        <StyledBlogCardWrapper $isLarge={isLarge}>
          <Heading level={3} size={5}>
            {heading?.href ? (
              <Link
                href={heading.href}
                label={heading.label}
                target={heading.isExternal ? "_blank" : undefined}
              />
            ) : (
              heading?.label
            )}
          </Heading>
          {text && <Text size={3} color="#666666" label={text} />}
        </StyledBlogCardWrapper>

        {links && (
          <div>
            {links.map((link, index) => (
              <span key={index}>
                <Link
                  href={link.href}
                  label={link.label}
                  target={link.isExternal ? "_blank" : undefined}
                  display="inline-block"
                  fontSize="14px"
                  lineHeight="21px"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
                {index < links.length - 1 && " / "}
              </span>
            ))}
          </div>
        )}
        <Button
          id={button}
          as="a"
          href={buttonLink}
          label={button}
          target={targetBlank ? "_blank" : undefined}
        />
      </StyledBlogCardBody>
    </StyledBlogCard>
  );
};

export { BlogCardReforged };
