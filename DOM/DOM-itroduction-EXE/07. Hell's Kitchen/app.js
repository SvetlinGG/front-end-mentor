function solve() {

	document.querySelector('#btnSend').addEventListener('click', onClick);

	const textAreaRef = document.querySelector('textarea');
	const bestRestaurantRef = document.querySelector('#bestRestaurant p');
	const workersRef = document.querySelector('#workers p');

	function onClick(){
		const data = textAreaRef.value;
		const restaurantData = JSON.parse(data);
		const result = {};

		for (let el of restaurantData){
			let [restaurantName, workersList] = el.split(' - ');
			if (!result.hasOwnProperty(restaurantName)){
				result[restaurantName] = {
					avgSalary: 0,
					bestSalary: 0,
					workers: []
				}
			}
			const workersData = workersList.split(', ');
			const newWorkers = createWorkerList(workersData);
			result.workers = concatWorkers(result.workers, newWorkers);
			let sumSalary = 0;
			let bestSalary = 0;
			let workerArr = [];
			for ( let worker of workersData){
				let [workerName, salary] = worker.split(' ');
				salary = Number(salary);
				
				
				result.push(worker);

			}
			const currentRestaurant = result[restaurantName];
			currentRestaurant.avgSalary = sumSalary / workerArr.length;
			currentRestaurant.bestSalary = bestSalary;
		}
	}

	function createWorkerList(currentWorkerList, newWorkerList){

	}













	// document.querySelector('#btnSend').addEventListener('click', onClick);
	// const input = document.querySelector('#inputs>textarea');
	// const bestRestorantResult = document.querySelector('#bestRestorant');
	// const workersResult = document.querySelector('#workers>p');


	// function onClick(){
	// 	const arr = JSON.parse(input.value );

	// 	const restorants = {};

	// 	arr.forEach(el => {
	// 		const[ name, workers] = el.split(' - ');
	// 		const workersCollection = workers.split(', ');
	// 		const workersDictCollection = [];
	// 		for ( let worker of workersCollection ){
	// 			const [workerName, salary]= worker.split(' ');
				
	// 			workersDictCollection.push({ name: workerName, salary});
	// 		}
	// 		if ( restorants[name]){
	// 			workersDictCollection = workersDictCollection.concat(restorants[name].workers);
	// 		}
	// 		workersDictCollection.sort( (w1, w2) => w2.salary - w1.salary)
	// 		const bestSalary = workersDictCollection[0].salary;
	// 		const totalSalary = workersDictCollection.reduce((sum, w) => sum + w.salary, 0);
	// 		const avgSalary = totalSalary / workersDictCollection.length;
	// 		restorants[name] = {
	// 			workers: workersDictCollection,
	// 			avgSalary: avgSalary,
	// 			bestSalary,
	// 		};

	// 	});
	// 	let bestRestaurantResultSalary = 0;
	// 	let bestRestaurant = undefined;

	// 	for ( let name in restorants){
	// 		const  currentRestorant = restorants[name];
	// 		if( currentRestorant.avgSalary > bestRestaurantResultSalary){
	// 			bestRestaurant = {
	// 				name,
	// 				workers: currentRestorant[name].workers,
	// 				bestSalary: currentRestorant[name].bestSalary,
	// 				avgSalary: currentRestorant[name].avgSalary
	// 			};
	// 			bestRestaurantResultSalary = restorants[name].avgSalary;
	// 		}

	// 	}
	// 	bestRestorantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${Number(bestRestaurant.avgSalary).toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

	// 	const result = [];
	// 	bestRestaurant.workers.forEach((worker) => {
	// 		result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
	// 	});

	// 	workersResult.textContent = result.join(' ');

	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*document.querySelector('#btnSend').addEventListener('click', onClick);

	const calcAverageSalary = arr => {
		return (
			arr.workers
				.map(el => el.split(' ')[1])
				.reduce((a, b) => Number(a) + Number(b)) / arr.workers.length
		);
	};

	const getTheHighestSalary = arr => {
		return (arr.bestSalary = Math.max(
			...arr.workers.map(el => el.split(' ')[1])
		));
	};

	function onClick() {
		const input = JSON.parse(
			document.getElementsByTagName('textarea')[0].value
		);
		const bestRestaurant = document.getElementsByTagName('p')[0];
		const workersEl = document.getElementsByTagName('p')[1];
		workersEl.textContent = '';
		bestRestaurant.textContent = '';
		// create collection
		const restaurants = {};

		// parse the input
		for (const line of input) {
			let [restaurantName, workers] = line.split(' - ');
			workers = workers.split(', ');

			if (!restaurants.hasOwnProperty(restaurantName)) {
				restaurants[restaurantName] = {
					workers: workers,
					bestSalary: 0,
					averageSalary: 0,
				};
			} else {
				workers.forEach(worker =>
					restaurants[restaurantName].workers.push(worker)
				);
			}

			// calculate the best salary
			restaurants[restaurantName].bestSalary = getTheHighestSalary(
				restaurants[restaurantName]
			);

			// calculate the average salary // income
			restaurants[restaurantName].averageSalary = calcAverageSalary(
				restaurants[restaurantName]
			);
		}

		// get the best restaurant
		const best = Object.entries(restaurants).sort(
			(a, b) => b[1].averageSalary - a[1].averageSalary
		)[0];
		const [name, obj] = best;
		const { bestSalary, averageSalary, workers } = obj;

		// render the best restaurant
		bestRestaurant.textContent = `Name: ${name} Average Salary: ${averageSalary.toFixed(
			2
		)} Best Salary: ${bestSalary.toFixed(2)}`;

		// render the workers
		const sortedBySalaries = workers
			.map(el => el.split(' '))
			.sort((a, b) => b[1] - a[1]);

		sortedBySalaries.forEach(el => {
			const [name, salary] = el;
			workersEl.textContent += `Name: ${name} With Salary: ${salary} `;
		});
	}*/
