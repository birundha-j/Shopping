import rect from 'react';
import './icons.css'
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

function IconsView(props){
    return(
        <div className="IconShow">
            <VisibilityIcon/>
            <div>✎</div>
            <DeleteIcon/>

        </div>
    )
}
export default IconsView;