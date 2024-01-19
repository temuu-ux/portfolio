const SkillLogos = (props) => {
  const { id, Icon, text } = props;

  return (
    <div className="flex flex-col justify-center mb-[20px]">
      <div id={id}>
        <Icon className="w-[64px] h-[64px] mb-[5px]" />
      </div>
      <div className="text-center">{text}</div>
    </div>
  );
};

export default SkillLogos;
