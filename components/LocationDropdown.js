import React from "react";
import styled from "styled-components";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../features/appSlice";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "flex-end",
	},
	paper: {
		marginRight: theme.spacing(2),
		marginTop: "4px",
	},
}));
function LocationDropdown({ open, setOpen, anchorRef }) {
	const dispatch = useDispatch();

	const classes = useStyles();

	const handleClose = (event) => {
		if (anchorRef?.current && anchorRef?.current?.contains(event?.target)) {
			return;
		}

		setOpen(false);
	};

	const setLocation = (location) => {
		dispatch(setCurrentLocation(location));
		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef?.current?.focus();
		}

		prevOpen.current = open;
	}, [open]);
	return (
		<Container>
			<div>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom" ? "center top" : "center bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id='menu-list-grow'
										onKeyDown={handleListKeyDown}
									>
										<MenuItem
											onClick={() => {
												setLocation("Edmonton");
												handleClose();
											}}
										>
											Edmonton
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Container>
	);
}
export default LocationDropdown;
const Container = styled.div`
	margin-top: 4px;
	&&& {
		background-color: black;
	}
	.MuiPaper-root {
		background-color: var(--light-colour-1);
	}
`;
