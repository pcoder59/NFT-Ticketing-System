function Events(props) {
    return (
        <div>
            <main>
				{
					props.isWalletConnected?
					<div>
						<form id="create-event-form">
                            <label htmlFor="event-name">Event Name:</label>
                            <input type="text" id="event-name" name="event-name"></input>

                            <label htmlFor="event-description">Event Description:</label>
                            <textarea id="event-description" name="event-description"></textarea>

                            <label htmlFor="event-date">Event Date and Time:</label>
                            <input type="datetime-local" id="event-date" name="event-date"></input>

                            <label htmlFor="event-location">Event Location:</label>
                            <input type="text" id="event-location" name="event-location"></input>

                            <label htmlFor="event-ticket-price">Ticket Price (in ETH):</label>
                            <input type="number" step="0.001" id="event-ticket-price" name="event-ticket-price"></input>

                            <button type="submit">Create Event</button>
                        </form>
					</div>:null
				}
		        
	        </main>
        </div>
    )
}

export default Events;