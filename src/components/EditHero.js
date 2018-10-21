import React from 'react';

const EditHero = ({ selectedHero, addingHero, onChange, onSave, onCancel }) => {
  if (selectedHero) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>id: </label>
            {addingHero
              ? <input
                  type="number"
                  name="id"
                  placeholder="id"
                  value={selectedHero.id}
                  onChange={onChange}
                />
              : <label className="value">
                  {selectedHero.id}
                </label>}
          </div>
          <div>
            <label>name: </label>
            <input
              name="name"
              value={selectedHero.name}
              placeholder="name"
              onChange={onChange}
            />
          </div>
          <div>
            <label>saying: </label>
            <input
              name="saying"
              value={selectedHero.saying}
              placeholder="saying"
              onChange={onChange}
            />
          </div>
        </div>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditHero;
