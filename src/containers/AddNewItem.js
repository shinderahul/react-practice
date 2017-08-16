import React from 'react';
import './AddNewItem.css';

const AddNewItem = () => (
  <div className="container">

    <form role="form">
        <h2>Summary</h2>

        <div className="required-field-block">
            <input type="text" placeholder="Item Code" className="form-control"/>
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <input type="text" placeholder="Item Name" className="form-control"/>
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <input type="text" placeholder="Item Description" className="form-control"/>
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <input type="text" placeholder="Item Price" className="form-control"/>
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <input type="text" placeholder="Item quantity present in stock" className="form-control"/>
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <input type="text" placeholder="Max order count for item" className="form-control"/>
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <select type="text" className="form-control">
              <option value="">Item Category</option>
              <option value="clothing">Clothing</option>
              <option value="mobile">Mobile</option>
              <option value="accessories">Accessories</option>
              <option value="home">Home</option>
            </select>
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>


        <button className="btn btn-primary">Add Data</button>
    </form>

  </div>
)

export default AddNewItem;
