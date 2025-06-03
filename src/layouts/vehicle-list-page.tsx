import {useEffect, useState} from "react";
import CardVehicleItem from "../components/cardVehicleItem";
import axios from "axios";

export type DataProps = {
  imei?: number;
  owner?: string;
  device_name?: number;
  plate?: string;
  gsm_no?: string;
  activation_time?: string;
  expired_gsm?: string;
  gps_type?: string;
  vehicle_type?: string;
  nomesin?: string | number | null;
  norangka?: string | number | null;
  acc?: string;
  longitude?: number;
  latitude?: number;
  angle?: number;
  altitude?: string | number | null;
  speed: number;
  mileage?: number;
  address?: string | number | null;
  door?: string;
  temperature?: string | number | null;
  last_positioning?: string;
  last_update?: string;
  satellite?: string | number | null;
  gsm_signal?: number;
  battery?: number;
};

function VehicleListPage() {
  const [data, setData] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const access_token = window.localStorage.getItem("access_token");
        const data = await axios.get(
          `${import.meta.env.SUPERSPRING_APP_URL}/vehicle`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        setData(data?.data?.message?.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className=" relative grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          Array(6)
            .fill(1)
            .map((_, index) => (
              <div
                key={index}
                className="w-full h-[177px] rounded-lg bg-slate-400 animate-pulse"
              />
            ))
        ) : data.length !== 0 ? (
          data?.map((item, index) => (
            <CardVehicleItem item={item} key={index} />
          ))
        ) : (
          <div className="w-full absolute top-30 flex justify-center items-center">
            <div className="flex justify-center flex-col items-center">
              <p className="text-2xl font-black text-slate-500">
                Ups! Empty !!
              </p>
              <p className="text-slate-500">Cannot find any data</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VehicleListPage;
