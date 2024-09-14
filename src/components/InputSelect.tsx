import React, { useState } from "react";
import { ConvertRate, InputSelectProps } from "@/types/mixpayTypes";
import CustomImage from "@/components/CustomImage";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

export default function InputSelect({
  data,
  onSelectionChange,
}: InputSelectProps) {
  const [selectedValue, setSelectedValue] = useState<ConvertRate | null>(null);

  const handleSelection = (e: DropdownChangeEvent) => {
    const selected = e.value as ConvertRate;
    setSelectedValue(selected);
    // onSelectionChange(e);
  };

  const template = (option: ConvertRate) => {
    return (
      <div className="d-flex align-items-center imgConvertRate">
        <CustomImage
          fullSrc={option?.iconUrl}
          className={`mx-1 flag`} 
        />
        <div style={{ width: 50 }}>{option.symbol}</div>
        <div>
          <b> {option.value}</b>
        </div>
      </div>
    );
  };

  const selectedTemplate = (option: ConvertRate | null) => {
    if (option) {
      onSelectionChange(option);
      return (
        <div className="d-flex align-items-center imgConvertRate">
          <CustomImage
            fullSrc={option.iconUrl}
            className={`mx-1 flag`} 
          />
          <div>
            {option.symbol} <b> {option.value}</b>
          </div>
        </div>
      );
    }
    return <span>Select Estimated amount</span>;
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedValue}
        options={data}
        onChange={(e: DropdownChangeEvent) => handleSelection(e)}
        optionLabel="symbol"
        optionValue="symbol"
        placeholder="Select Estimated amount"
        itemTemplate={template}
        valueTemplate={selectedTemplate}
        className="w-full md:w-20rem text-center shadow-sm border"
        filter
      />
    </div>
  );
}
