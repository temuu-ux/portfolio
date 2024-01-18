const SkillRender = (props) => {
  const { id, Icon, text } = props;
  return (
    <div className="flex flex-col justify-center gap-10">
      <div id={id}>
        <div className="w-16 h-16">
          {" "}
          <Icon />
        </div>
      </div>
      <div className="text-center">{text}</div>
    </div>
  );
};
export default SkillRender;
