import React, { useEffect, useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import axiosInstance from '../../../config/axiosInstance'
import InventoryCard from './inventoryCard'

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInventory = async () => {
    try {
      const response = await axiosInstance.get('/dealer/inventory');
      setInventoryList(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInventory();
  }, []);

  console.log("iventory", inventoryList);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="inventory-header">
        <div className="container">
          <h1>Inventory</h1>
        </div>
      </section>

      <section className='inventory py-5'>
        <div className="container">
          <div className="row">
            {inventoryList.length > 0 ? (
              inventoryList?.map((car) => {
                 return(
                  <InventoryCard car={car} />
                 )
              })
            ) : (
              <p>No cars in inventory</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Inventory;
