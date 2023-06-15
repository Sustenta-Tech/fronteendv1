import React, { useState } from "react";
import './BotaoChat.css'
import MyChatbot from "../../chatbot/chatbot";
import { Modal } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
        },
    },
}));

function BotaoChat() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen} className="botaoChat"> + </button>
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <MyChatbot />
            </Modal>
        </div>
    );
}

export default BotaoChat;