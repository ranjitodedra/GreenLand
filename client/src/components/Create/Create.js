import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        img: "",
        title: "",
        description: "",
        price: "",
        phone: "",
        level: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:3001/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ name: "", position: "", level: "" });
        window.alert("creadted");
        navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>Create New Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="img"
                        value={form.img}
                        onChange={(e) => updateForm({ img: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Description</label>
                    <input
                        type="description"
                        className="form-control"
                        id="description"
                        value={form.description}
                        onChange={(e) => updateForm({ description: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Price</label>
                    <input
                        type="price"
                        className="form-control"
                        id="price"
                        value={form.price}
                        onChange={(e) => updateForm({ price: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Your Phone Number</label>
                    <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        value={form.phone}
                        onChange={(e) => updateForm({ phone: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionBuy"
                            value="Buy"
                            checked={form.type === "Buy"}
                            onChange={(e) => updateForm({ type: e.target.value })}
                        />
                        <label htmlFor="positionIntern" className="form-check-label">Sell</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionRent"
                            value="Rent"
                            checked={form.type === "Rent"}
                            onChange={(e) => updateForm({ type: e.target.value })}
                        />
                        <label htmlFor="positionJunior" className="form-check-label">Rent</label>
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Post House"
                        className="btn btn-primary"
                    />
                </div>

            </form>
        </div>
    );
}