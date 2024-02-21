import React, { useState } from 'react';

function SurveyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        hairType: '',
        productInterests: [],
        qualitiesOfInterest: [],
        purchaseLocations: [],
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (evt) => {
        const { name, value, checked } = evt.target;
        setFormData(prevData => {
            if (checked) {
                return { ...prevData, [name]: [prevData[name], value] };
            } else {
                return { ...prevData, [name]: prevData[name].filter(item => item !== value) };
            }
        }); 
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formData); 
    };

    return(
        <div>
            <h2>Hair Product Interest Survey</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                

                <label>Email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                

                <label>Age:</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} />

                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label>Hair Type:</label>
                <select name="hairType" value={formData.hairType} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="straight">Straight</option>
                    <option value="wavy">Wavy</option>
                    <option value="curly">Curly</option>
                    <option value="coily">Coily</option>
                    <option value="bald">Bald</option>
                </select>

                <label>Product Interests:</label>
                <div>
                    <label>
                        <input type="checkbox" name="productInterests" value="shampoo" onChange={handleCheckboxChange} />
                        Shampoo
                    </label>
                    <label>
                        <input type="checkbox" name="productInterests" value="conditioner" onChange={handleCheckboxChange} />
                        Conditioner
                    </label>
                    <label>
                        <input type="checkbox" name="productInterests" value="hairOil" onChange={handleCheckboxChange} />
                        Hair Oil
                    </label>
                </div>
                
                <label>Qualities of Interest:</label>
                <div>
                    <label>
                        <input type="checkbox" name="qualitiesOfInterest" value="natural ingredients" onChange={handleCheckboxChange} />
                        Natural Ingredients
                    </label>
                    <label>
                        <input type="checkbox" name="qualitiesOfInterest" value="hydrating" onChange={handleCheckboxChange} />
                        Hydrating
                    </label>
                    <label>
                        <input type="checkbox" name="qualitiesOfInterest" value="color-protecting" onChange={handleCheckboxChange} />
                        Color-Protecting
                    </label>
                </div>

                <label>Purchase Locations:</label>
                <div>
                <label>
                        <input type="checkbox" name="purchaseLocations" value="beauty supply store" onChange={handleCheckboxChange} />
                        Beauty Supply Store
                    </label>
                    <label>
                        <input type="checkbox" name="purchaseLocations" value="directly from brand websites" onChange={handleCheckboxChange} />
                        Directly from Brand Websites
                    </label>
                    <label>
                        <input type="checkbox" name="purchaseLocations" value="online retailers" onChange={handleCheckboxChange} />
                        Online Retailers
                    </label>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SurveyForm;

    // This survey form collects the participant's name, email, age, gender, hair type, and product interests.
    //  It allows for single-choice selection for age, gender, and hair type, and multiple-choice selection for product interests, quality interests, and purchase location. 
    // Upon submission, it logs the form data to the console. 

 