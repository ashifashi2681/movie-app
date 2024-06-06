import React, { useState, Fragment } from "react";
import "../../styles/Filter.css";
import categoriesData from "../../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

const yearsData = [
	{ title: "Sort By Year" },
	{ title: "1970 - 1980" },
	{ title: "1981 - 1990" },
	{ title: "1991 - 2000" },
	{ title: "2001 - 2010" },
	{ title: "2011 - 2020" },
	{ title: "2021 - 2030" },
];
const timesData = [
	{ title: "Sort By Times" },
	{ title: "1hr - 2hr" },
	{ title: "2hr - 3hr" },
	{ title: "3hr - 4hr" },
	{ title: "4hr - 5hr" },
];
const ratingData = [
	{ title: "Sort By Rating" },
	{ title: "1 Star" },
	{ title: "2 Star" },
	{ title: "3 Star" },
	{ title: "4 Star" },
	{ title: "5 Star" },
];

function Filter() {
	const [category, setCategory] = useState({ title: "Sort By Category" });
	const [time, setTime] = useState(timesData[0]);
	const [year, setYear] = useState(yearsData[0]);
	const [rate, setRate] = useState(ratingData[0]);

	const filters = [
		{
			value: category,
			onChange: setCategory,
			items: categoriesData,
		},
		{
			value: time,
			onChange: setTime,
			items: timesData,
		},
		{
			value: year,
			onChange: setYear,
			items: yearsData,
		},
		{
			value: rate,
			onChange: setRate,
			items: ratingData,
		},
	];

	return (
		<div className="filter-container">
			{filters.map((filter, i) => (
				<Listbox
					as="div"
					key={i}
					value={filter.value}
					onChange={filter.onChange}
					className="list-box">
					<Listbox.Button className="listbox-btn">
						<span>{filter.value.title}</span>
						<span>
							<FaChevronDown />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<Listbox.Options className="listbox-options">
							{filter.items.map((option, i) => (
								<Listbox.Option
									key={i}
									value={option}
									className="listbox-option">
									{({ selected }) => (
										<>
											<span>{option.title}</span>
											{selected ? (
												<span>
													<FaCheck aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</Listbox>
			))}
		</div>
	);
}

export default Filter;
