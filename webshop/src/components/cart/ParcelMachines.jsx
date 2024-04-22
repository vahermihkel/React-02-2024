import LocalShipping from '@mui/icons-material/LocalShipping';
import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]);
  const [originalPMs, setOriginalPMs] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(body => {
        setParcelMachines(body);
        setOriginalPMs(body);
      })
  }, []);

  const searchFromPMs = () => {
    const result = originalPMs.filter(pm => pm.NAME.toLowerCase().includes(searchRef.current.value.toLowerCase()));
    setParcelMachines(result);
  }

  return (
    <div>
      <Button variant="outlined">EE</Button>
      <Button variant="outlined">LV</Button>
      <Button variant="outlined">LT</Button>

      <LocalShipping />
      <input ref={searchRef} onChange={searchFromPMs} type="text" />
      <span>{parcelMachines.filter(pm => pm.A0_NAME === "EE").length} pcs</span>
      
      {parcelMachines.length === 0 ? <div>Loading...</div> : 
      <select>
        {parcelMachines.filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option>{pm.NAME}</option>)}
      </select>}
    </div>
  )
}

export default ParcelMachines