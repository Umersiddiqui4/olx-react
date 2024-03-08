import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PostAds } from '../../../config/firebase/App';
import "./App.css"

export default function Post() {
    const [Title, setTitle] = useState()
    const [Description, setDescription] = useState()
    const [Price, setPrice] = useState()
    const [Image, setImage] = useState()
    const navigate = useNavigate();
    const Go = () => {
        // await
        PostAds({ Title, Description, Price, Image })

        // navigate("/");
    }


    return (
        <div className='post'>
            <div className='post-header container-fluid'>
                <img  onClick={() => navigate("/")} src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"></img>
            </div>
            <div className="page-content">
                <div className="form-v5-content">
                    <form className="form-detail" >
                        <h2>Enter your Ad detail</h2>
                        <div className="form-row">
                            <label htmlFor="full-name">Title</label>
                            <input type="text" name="full-name" id="full-name" className="input-text" placeholder="Title" required onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="your-email">Description</label>
                            <input type="text" name="full-name" id="full-name" className="input-text" placeholder="Title" required onChange={(e) => setDescription(e.target.value)} />

                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Price</label>
                            <input type="text" name="password" id="password" className="input-text" placeholder="Price" required onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Image</label>
                            <input type="file" name="password" id="password" className="input-text" placeholder="Image" required onChange={(e) => setImage([e.target.files])} multiple />
                        </div>
                        <div className="form-row-last">
                             <button type="button" className="register" onClick={Go}>
        Post
      </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

