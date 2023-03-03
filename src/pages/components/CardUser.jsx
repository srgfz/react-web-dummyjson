import React from "react";
import { Link } from "react-router-dom";

const CardUser = ({ user }) => {
  return (
    <Link className="text-dark text-decoration-none" to={"/users/" + user.id} >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={user.image}
              className="img-fluid rounded-start"
              alt={user.maidenName}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center text-primary">
                {user.firstName} {user.lastName}
              </h5>
              <p className="card-text text-center">{user.maidenName}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardUser;
