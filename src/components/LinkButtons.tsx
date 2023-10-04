interface Props {
  lightMode: "light" | "dark";
  links: { name: string; link: string; icon?: JSX.Element }[];
  divWidthPercent: number;
  minWidth: string;
  maxWidth?: string;
  buttonClass?: string; // Optional classes to add to the buttons
  buttonId?: string; // Optional id to add to the buttons -- best used with only one button
  divClass?: string; // Optional classes to add to the div surrounding the buttons
}

function LinkButtons({
  lightMode,
  links,
  divWidthPercent,
  minWidth,
  maxWidth,
  buttonClass,
  buttonId,
  divClass,
}: Props) {
  const divSize = divWidthPercent / links.length; // value is in %
  const divMarginSize = divSize - divSize / 1.1; // value is in %
  const btnSize = 100 / 1.1; // value is in %
  const btnMarginSize = (100 - btnSize) / 2; // value is in %

  return (
    <>
      {links.map(({ link, name, icon }) => {
        return (
          <div
            className={"col " + divClass}
            style={{
              flex: "0 0 auto",
              width: divSize + "%",
              minWidth: minWidth,
              maxWidth: maxWidth,
              marginTop: divMarginSize + "%",
              marginBottom: divMarginSize + "%",
            }}
            id={buttonId}
          >
            <a
              target="_blank"
              rel="noopener"
              className={
                "btn link-btn " + lightMode + "-secondary " + buttonClass
              }
              style={{
                marginLeft: btnMarginSize + "%",
                marginRight: btnMarginSize + "%",
                width: btnSize + "%",
              }}
              href={link}
            >
              {icon}
              {name}
            </a>
          </div>
        );
      })}
    </>
  );
}

export default LinkButtons;
