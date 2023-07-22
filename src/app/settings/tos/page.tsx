// TBD
const TOSDesc = [
  {
    title: "第一項",
    desc0:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。1",
    desc1:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。2",
  },
  {
    title: "第二項",
    desc0:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。3",
    desc1:
      "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。4",
  },
];
const TOSPage = () => {
  return (
    <div className="px-3">
      <h1 className="py-4 text-large font-bold">利用規約</h1>
      <ul className="flex flex-col gap-3 ">
        {TOSDesc.map((d) => {
          return (
            <li key={d.title}>
              <h2 className="py-4 text-large font-semibold ">{d.title}</h2>
              <div className="font-medium">
                <p className="pb-4">{d.desc0}</p>
                <p>{d.desc1}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TOSPage;
