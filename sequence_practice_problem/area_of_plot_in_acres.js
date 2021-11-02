/* AREA OF PLOT IN ACRES */

function areaInAcres(){

	const plot = 5;
        const l = 4;
        const b = 4;

        let area = ((l * b));
        let newArea = ((area / 3));
        console.log (" AREA IN METERS = " + newArea);

        let areaOfNewPlot = ((newArea * plot));
	let areaInAcres = ((areaOfNewPlot / 4046.856));
        console.log (" AREA OF PLOT = " + areaInAcres);
}
	console.log (areaInAcres())