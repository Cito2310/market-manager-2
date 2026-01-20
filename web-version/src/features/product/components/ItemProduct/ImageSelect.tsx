interface props {
    onModalImage: () => void;
    data: {
        imgBase64: string | null;
        imgName: string | null;
    };
}

export const ImageSelect = ({ data, onModalImage }: props) => (
    <button onClick={ onModalImage } type="button" className="
        flex flex-col rounded-md overflow-hidden bg-white shadow-sm 
        hover:brightness-[.97] active:brightness-[.94] transition-base cursor-pointer 
        border-2 border-transparent hover:border-[#008080]
    ">
        {
            data.imgBase64 
            ? <img className="h-[200px] object-contain" src={data.imgBase64}></img>
            : <div className="h-[200px] flex"><i className="m-auto fa-regular fa-image text-6xl text-[#008080]"/></div>
        }

        <div className="flex items-center justify-center gap-3 px-4 py-3 ">
            <i className="fa-solid fa-image text-2xl text-[#008080]" />
            { data.imgName }
        </div>
    </button>
)