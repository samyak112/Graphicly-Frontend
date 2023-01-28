import Pen from '@mui/icons-material/EditOutlined';
import Eraser from '@mui/icons-material/AutoFixHighOutlined';
import Text from '@mui/icons-material/TextFieldsOutlined';
import Hand from '@mui/icons-material/PanToolOutlined';
import Pointer from '@mui/icons-material/NearMeOutlined';
import Undo from '@mui/icons-material/Undo';
import Redo from '@mui/icons-material/Redo';

const other_options = [
    {
      option_icon:Pen,
      option_name:"Pen",
      option_type:'default'
    },
    
    {
      option_icon:Eraser,
      option_name:"Eraser",
      option_type:'default'
    },
    
    {
      option_icon:Text,
      option_name:"Text",
      option_type:'crosshair'
    },
    
    {
      option_icon:Hand,
      option_name:"Hand",
      option_type:'grab'
    },
    
    {
      option_icon:Pointer,
      option_name:"Pointer",
      option_type:'default'
    },
    
    {
      option_icon:Undo,
      option_name:"Undo",
      option_type:'none'
    },
    
    {
      option_icon:Redo,
      option_name:"Redo",
      option_type:'none'
    },
    
  ]

 export default other_options