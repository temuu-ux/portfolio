export default SkillLogos = () => {
  const { id, Icon, text } = props;
  <div className="flex flex-col justify-center gap-10">
    <div id={id}>
      <Icon className="w-16 h-16 gap-5" />
    </div>
    <div className="text-center">{text}</div>
  </div>;
};
