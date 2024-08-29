import { useContext } from "react";
import { DataContext } from "../App";
import dataNama from "../data/dataNama";
import dataKota from "../data/dataKota";
import dataHobby from "../data/dataHobby";

function Child() {
  const { data, setData } = useContext(DataContext);

  const getRandomNama = () => {
    const randomIndex = Math.floor(Math.random() * dataNama.length);
    return dataNama[randomIndex];
  };
  const getRandomKota = () => {
    const randomIndex = Math.floor(Math.random() * dataKota.length);
    return dataKota[randomIndex];
  };
  const getRandomHobby = () => {
    const randomIndex = Math.floor(Math.random() * dataHobby.length);
    return dataHobby[randomIndex];
  };

  const handleAdddata = () => {
    setData((prevData) => [
      ...prevData,
      {
        id: data.length + 1,
        nama: getRandomNama(),
        kota: getRandomKota(),
        hobby: getRandomHobby(),
      },
    ]);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((data) => (
          <div
            key={data.id}
            className="border-2 border-black rounded-lg my-2 p-4"
          >
            <div>
              <p>Nama: {data.nama}</p>
              <p>Kota: {data.kota}</p>
              <p>Hobby: {data.hobby}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="border text-white font-medium bg-emerald-500 hover:bg-emerald-800 rounded-md p-1"
          onClick={handleAdddata}
        >
          Tambah Data
        </button>
      </div>
    </div>
  );
}

export default Child;
