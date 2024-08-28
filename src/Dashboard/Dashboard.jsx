import React from "react";

function Dashboard({user}) {
    return (
        <div>
            {user.isAdmin ? (
                <div>
                    <h1>Admin Dashboard</h1>
                    <p>Welcome Admin, {user.name}!</p>
                    <button>Add new users</button>
                    <button>Manage Users</button>
                    <button>Manage Settings</button>
                    <button>View Reports</button>
                </div>
        
            ) : (
            
                <div>
                    <h1>Guest Dashboard</h1>
                    <p>Welcome User, {user.name}!</p>
                    <button>Update profile information</button>
                    <button>Settings</button>
                </div>
        
                )
            }
        </div>
    );
}

export default Dashboard;