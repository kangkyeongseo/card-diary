interface EditCardProp {
  title: string;
  contents: string;
  date: string;
  period?: number;
  importance?: number;
  bgColor: string;
  kind?: "todo" | "diary" | "memo";
  onTitleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onContentsChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onPeriodChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onDateChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  setImportance?: (arg: number) => void;
  setBgColor: (arg: string) => void;
  onEditCard: () => void;
}

export default function EditCard({
  title,
  contents,
  date,
  period,
  importance = 0,
  bgColor,
  kind = "todo",
  onTitleChange,
  onContentsChange,
  onPeriodChange,
  onDateChange,
  setImportance,
  setBgColor,
  onEditCard,
}: EditCardProp) {
  return (
    <div className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10">
      {kind === "todo" ? (
        <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white text-center">
            계획 수정하기
          </h3>
          <div className="grid grid-cols-2 items-center mt-8">
            <div className="ml-6">
              <div
                className={[
                  "flex flex-col w-56 h-80 rounded-xl shadow-2xl p-4 relative",
                  `bg-${bgColor}-500`,
                ].join(" ")}
              >
                <div className="flex justify-between items-center ">
                  <span className="text-xs text-white">{date}</span>
                  <div className="text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          importance >= star ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center text-lg font-bold text-white mt-4 break-words">
                  {title.length === 0 ? "무엇을 해야하나요?" : title}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{contents}</div>
                </div>
                <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
                  <div>{period}일 남음</div>
                </div>
              </div>
            </div>
            <div>
              <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label className="text-white">제목</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={title}
                    onChange={onTitleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">내용</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={contents}
                    onChange={onContentsChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">기간</label>
                  <input
                    type="date"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    onChange={onPeriodChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">중요도</label>
                  <div className="flex gap-1 text-xl">
                    <div>
                      <label
                        htmlFor="1"
                        className={
                          importance >= 1 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="1"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance!(1)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="2"
                        className={
                          importance >= 2 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="2"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance!(2)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="3"
                        className={
                          importance >= 3 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="3"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance!(3)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="4"
                        className={
                          importance >= 4 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="4"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance!(4)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="5"
                        className={
                          importance >= 5 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="5"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance!(5)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">배경색</label>
                  <div className="flex gap-4">
                    <div>
                      <label htmlFor="blue">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-blue-500",
                            bgColor === "blue" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="blue"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("blue")}
                      />
                    </div>
                    <div>
                      <label htmlFor="green">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-green-500",
                            bgColor === "green" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="green"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("green")}
                      />
                    </div>
                    <div>
                      <label htmlFor="yellow">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-yellow-500",
                            bgColor === "yellow" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="yellow"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("yellow")}
                      />
                    </div>
                    <div>
                      <label htmlFor="slate">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-slate-500",
                            bgColor === "slate" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="slate"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("slate")}
                      />
                    </div>
                    <div>
                      <label htmlFor="red">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-red-500",
                            bgColor === "red" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="red"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("red")}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              className="w-72 p-2 rounded-xl bg-white hover:bg-gray-200"
              onClick={onEditCard}
            >
              취소하기
            </button>
            <button
              className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={onEditCard}
            >
              수정하기
            </button>
          </div>
        </div>
      ) : null}
      {kind === "diary" ? (
        <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white text-center">
            다이어리 수정하기
          </h3>
          <div className="grid grid-cols-2 items-center mt-8">
            <div className="ml-6">
              <div
                className={[
                  "flex flex-col w-56 h-80 rounded-xl shadow-2xl p-4 relative",
                  `bg-${bgColor}-500`,
                ].join(" ")}
              >
                <div className="flex justify-center items-center ">
                  <span className="text-sm text-white">{date}</span>
                </div>
                <div className="text-center text-lg font-bold text-white mt-4 break-words">
                  {title.length === 0 ? "무엇을 해야하나요?" : title}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{contents}</div>
                </div>
              </div>
            </div>
            <div>
              <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label className="text-white">제목</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={title}
                    onChange={onTitleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">내용</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={contents}
                    onChange={onContentsChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">날짜</label>
                  <input
                    type="date"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    onChange={onDateChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">배경색</label>
                  <div className="flex gap-4">
                    <div>
                      <label htmlFor="blue">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-blue-500",
                            bgColor === "blue" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="blue"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("blue")}
                      />
                    </div>
                    <div>
                      <label htmlFor="green">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-green-500",
                            bgColor === "green" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="green"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("green")}
                      />
                    </div>
                    <div>
                      <label htmlFor="yellow">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-yellow-500",
                            bgColor === "yellow" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="yellow"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("yellow")}
                      />
                    </div>
                    <div>
                      <label htmlFor="slate">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-slate-500",
                            bgColor === "slate" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="slate"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("slate")}
                      />
                    </div>
                    <div>
                      <label htmlFor="red">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-red-500",
                            bgColor === "red" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="red"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("red")}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              className="w-72 p-2 rounded-xl bg-white hover:bg-gray-200"
              onClick={onEditCard}
            >
              취소하기
            </button>
            <button
              className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={onEditCard}
            >
              수정하기
            </button>
          </div>
        </div>
      ) : null}
      {kind === "memo" ? (
        <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white text-center">
            메모 수정하기
          </h3>
          <div className="grid grid-cols-2 items-center mt-8">
            <div className="ml-6">
              <div
                className={[
                  "flex flex-col w-56 h-80 rounded-xl shadow-2xl p-4 relative",
                  `bg-${bgColor}-500`,
                ].join(" ")}
              >
                <div className="flex justify-center items-center ">
                  <span className="text-sm text-white">{date}</span>
                </div>
                <div className="text-center text-lg font-bold text-white mt-4 break-words">
                  {title.length === 0 ? "메모" : title}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{contents}</div>
                </div>
              </div>
            </div>
            <div>
              <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label className="text-white">제목</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={title}
                    onChange={onTitleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">내용</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={contents}
                    onChange={onContentsChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">날짜</label>
                  <input
                    type="date"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    onChange={onDateChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">배경색</label>
                  <div className="flex gap-4">
                    <div>
                      <label htmlFor="blue">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-blue-500",
                            bgColor === "blue" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="blue"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("blue")}
                      />
                    </div>
                    <div>
                      <label htmlFor="green">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-green-500",
                            bgColor === "green" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="green"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("green")}
                      />
                    </div>
                    <div>
                      <label htmlFor="yellow">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-yellow-500",
                            bgColor === "yellow" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="yellow"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("yellow")}
                      />
                    </div>
                    <div>
                      <label htmlFor="slate">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-slate-500",
                            bgColor === "slate" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="slate"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("slate")}
                      />
                    </div>
                    <div>
                      <label htmlFor="red">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-red-500",
                            bgColor === "red" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="red"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("red")}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              className="w-72 p-2 rounded-xl bg-white hover:bg-gray-200"
              onClick={onEditCard}
            >
              취소하기
            </button>
            <button
              className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={onEditCard}
            >
              수정하기
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
