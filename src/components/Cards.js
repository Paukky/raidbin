import { bossData } from '../assets/bossportrait/Portrait';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../assets/bossportrait', false, /\.(png|jpe?g|svg)$/));

const Cards = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center m-4">
            {bossData.map((data, key) => (
                <div
                    key={key}
                    className="group rounded-xl overflow-hidden border-4 border-primary-100 h-80 md:h-72 relative my-10 transition-all duration-300 ease-in-out hover:scale-105 hover:h-96"
                >
                    <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute z-20 w-full h-full"
                    ></a>
                    <div className="absolute w-full h-full overflow-hidden">
                        <img
                            src={images[data.image]}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className="relative z-20 bg-primary-300 text-primary-900 px-3  w-full transition-all duration-200 ease-in-out top-52 h-1/3 group-hover:top-64 ">
                        <p className="font-bold text-xl">{data.name}</p>
                        <div className="w-full">{data.description}</div>
                        <div className="w-full md:h-1/8 mt-5 items-center justify-center hidden md:flex space-x-2">
                            {data.bubbles.map(data => (
                                <div className="bg-primary-800 rounded-2xl md:p-2 p-1 text-primary-50 ">{data}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
