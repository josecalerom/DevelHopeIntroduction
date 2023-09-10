let primitive = 1;

switch (typeof primitive) {
    case 'string' :
        console.log('this variable is a string');
        break;
    case 'number':
        console.log('this variable is a number');
        break;
    case 'boolean':
        console.log('this variable is a boolean');
        break;
    default: 
        console.log('Variable type not studied yet')
}