import BranchSearchIcon from "../assets/icons/branchSearchIcon";
import SpidoMeter from "../assets/spidoMeter.png";
import BlackTruck from "../assets/black-truck.png";
import EngineIcon from "../assets/icons/engineIcon";
import SateliteIcon from "../assets/icons/sateliteIcon";
import BatteryIcon from "../assets/icons/batteryIcon";
import {memo} from "react";
import type {DataProps} from "../layouts/vehicle-list-page";

function CardVehicleItem({item}: {item: DataProps}) {
  const statusEngine = (item: DataProps) => {
    try {
      if (item.acc === "ON" && item.speed > 0) return "Running";
      if (item.acc === "OFF" && item.speed === 0) return "Parking";
      if (item.acc === "ON" && item.speed === 0) return "Stop";
    } catch (error) {
      console.log(error);
      return "N/A";
    }
  };
  return (
    <div>
      <div className="flex items-center gap-3 bg-white rounded-tl-lg rounded-tr-lg px-3 py-2 w-fit">
        <p className="text-[12px]">Status : </p>
        <div className="flex items-center gap-1">
          <div>
            <BranchSearchIcon />
          </div>
          <p className="text-[12px] font-bold">Dispatch</p>
        </div>
      </div>
      <div className=" bg-white rounded-bl-lg rounded-br-lg rounded-tr-lg p-5 w-full">
        <div className="flex gap-2">
          <div className="flex items-center relative">
            <img src={SpidoMeter} />
            <div className=" absolute bottom-0 left-6 flex flex-col items-center">
              <p className="text-[10px] font-bold text-slate-600">40km/h</p>
              <p className="text-[10px] text-slate-600">Odo 1000km</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={BlackTruck} />
            <div className="">
              <p className="text-[12px] text-slate-400">
                Shipment Number{" "}
                <span className="text-slate-800">35ACB95238</span>
              </p>
              <p className="text-[16px] text-slate-800 font-bold">
                {item.plate} - TRUCK 0001
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>
              <EngineIcon />
            </div>
            <p className="text-[12px] font-bold">{statusEngine(item)}</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <SateliteIcon />
            </div>
            <p className="text-[12px] font-bold">N/A</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <BatteryIcon />
            </div>
            <p className="text-[12px] font-bold">100%</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-2 bg-slate-100">
          <p className=" text-[10px] text-slate-800">
            Data Terakhir : {item.activation_time}
          </p>
          <p className=" text-[10px] text-slate-800">
            No GSM : {item.gsm_no || "-"}
          </p>
          <p className=" text-[10px] text-slate-800">
            Expired : {item.expired_gsm || "-"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(CardVehicleItem);
