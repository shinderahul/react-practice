import React from 'react';
import './AddNewItem.css';
import InputText from '../components/InputText/';
import InputSubmit from '../components/InputSubmit/';

const AddNewItem = () => (
  <div className="container">

    <form>
        <h2>Add New Item</h2>

        <div className="required-field-block">
            <InputText placeholder="Item Code" />
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <InputText placeholder="Item Name" />
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <InputText placeholder="Item Description" />
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <InputText placeholder="Item Price" />
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <InputText placeholder="Item quantity present in stock" />
            <div className="required-icon">
                <div className="text">*</div>
            </div>
        </div>

        <div className="required-field-block">
            <InputText placeholder="Max order count for item" />
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

        <InputSubmit value="Add Data" />
    </form>

  </div>
)

export default AddNewItem;
