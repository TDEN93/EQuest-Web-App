<!--
Properties
data: (PropTypes.object | PropTypes.func).isRequired,
width: PropTypes.number,
height: PropTypes.number,
legend: PropTypes.object,
options: PropTypes.object,
redraw: PropTypes.bool,
getDatasetAtEvent: PropTypes.func,
getElementAtEvent: PropTypes.func,
getElementsAtEvent: PropTypes.func
onElementsClick: PropTypes.func, // alias for getElementsAtEvent (backward compatibility)

More about this can be found here : https://github.com/jerairrest/react-chartjs-2

chartName: {
  labels:  ['String'],
  datasets: [{
    label: 'Title - String',
    backgroundColor: ['rgba(255,153,4,0.6)', 'rgba(22,189,244,0.6)', 'rgba(255,0,0,0.6)'], //
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
    hoverBorderColor: ['rgba(255,153,4,0.9)', 'rgba(22,189,244,0.9)', 'rgba(255,0,0,0.9)'],
    data: [3.2, 3.99, 5, 0] // Data to show
  }]
}, -->
