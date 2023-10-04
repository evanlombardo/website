interface Props {
  lightMode: "light" | "dark";
  links: { name: string; link: string; icon?: JSX.Element; id?: string }[];
  divWidthPercent: number;
  minWidth: string;
  maxWidth?: string;
  buttonClass?: string; // Optional classes to add to the buttons
  divClass?: string; // Optional classes to add to the div surrounding the buttons
}

function LinkButtons({
  lightMode,
  links,
  divWidthPercent,
  minWidth,
  maxWidth,
  buttonClass,
  divClass,
}: Props) {
  const divSize = divWidthPercent / links.length; // value is in %
  const divMarginSize = divSize - divSize / 1.1; // value is in %
  const btnSize = 100 / 1.1; // value is in %
  const btnMarginSize = (100 - btnSize) / 2; // value is in %

  return (
    <>
      {links.map(({ link, name, icon, id }) => {
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
            id={id}
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
