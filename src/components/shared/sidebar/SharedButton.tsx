import { click } from "@/types/types";

export default function SharedButton({
  buttonComponent,
  click,
}: {
  buttonComponent: React.ReactNode;
  click?: click;
}) {
  return (
    <div className="custom-button flex items-center">
      <div
        className="flex justify-center items-center w-[46px] h-[46px] hover:bg-[rgba(144,144,144,.45)] rounded-full"
        onClick={click ? click : undefined}>
        <span className="sr-only">커스텀 버튼</span>
        {buttonComponent}
      </div>
    </div>
  );
}
