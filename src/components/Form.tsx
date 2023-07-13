import { useContext } from "react";
import SelectAsset from "./SelectAsset";
import { FormDataContext } from "../contexts/formDataContext";

export const Form = (props: any) => {
  const { formData, setFormData } = useContext(FormDataContext);

  return (
    <form className="form">
      <div className="form-row">
        <label>
          <span> Instrument:</span>
          <div className="select">
            <SelectAsset
              setAsset={(opt: any) =>
                setFormData({ ...formData, symbol: opt.value as any })
              }
              type={"instrument"}
            />
          </div>
        </label>
      </div>
      <div className="form-row">
        <label>
          <span> Interval:</span>
          <div className="select">
            <SelectAsset
              setInterval={(opt: any) =>
                setFormData({ ...formData, interval: opt.value as any })
              }
            />
          </div>
        </label>
      </div>
      {props.type === "dca" ? (
        <div className="form-row">
          <label>
            <span> Amount:</span>
            <input
              value={formData?.value}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  value: e.target.value as any,
                });
              }}
            />
          </label>
        </div>
      ) : null}

      <div className="form-row">
        <label>
          <span> From:</span>
          <input
            type="date"
            min="1970-01-01"
            max="2025-01-01"
            value={formData?.period1}
            onChange={(e) =>
              setFormData({ ...formData, period1: e.target.value })
            }
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span> To:</span>
          <input
            type="date"
            min="1970-01-01"
            max="2025-01-01"
            value={formData?.period2}
            onChange={(e) =>
              setFormData({ ...formData, period2: e.target.value })
            }
          />
        </label>
      </div>
    </form>
  );
};
