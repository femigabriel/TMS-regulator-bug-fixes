import Image from "next/image";

export default function TextInput({
  type,
  onChangeText,
  icon,
  placeholder,
  value,
}: TextInputProps) {
  return (
    <div className="rounded-xl border-x-[0.5px] border-opacity-50 border-b-2 border-[#2C97CF] bg-white flex w-[536px] h-[56px] px-4 my-4 items-center">
      <input
        className="flex-1 h-full text-[#2C97CF] font-bold text-[1em] focus:outline-none"
        type={type}
        onChange={(e)=> onChangeText(e.target.value)}
        placeholder={placeholder}
        // value={value}
      />
      {icon ? <Image width={20} height={20} src={icon} alt="" /> : null}
    </div>
  );
}
