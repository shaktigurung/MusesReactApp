import React,{Component} from "react";
import "./../../App.css";

class DashboardNavBar extends Component{
    render(){
        return(
            <div className="dashboard">
                <ul>
                    <li><a href=""><i class="fas fa-server"></i> Dashboard </a></li>
                    <li><a href="/admin/profile"><i class="far fa-user"></i> Profile </a></li>
                    <li><a href="/events"><i class="fas fa-folder-plus"></i> Events </a></li>
                    <li><a href=""><i class="fab fa-sourcetree"></i> Resources</a></li>
                    <li><a href=""><i class="fas fa-file-alt"></i> Sponsors</a></li>
                    <li><a href=""><i class="fas fa-newspaper"></i> News </a></li>
                    <li><a href=""><i class="fas fa-tools"></i> Settings </a></li>
                </ul>
            </div>

        );

          
    }
}
export default DashboardNavBar;