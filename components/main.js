function Main() {
    return (
        <div>
            <main>
		        <section id="event-details">
			        <h2>Event Details</h2>
			        <p><strong>Event Name:</strong> Lorem Concert</p>
			        <p><strong>Date:</strong> October 1st, 2023</p>
			        <p><strong>Time:</strong> 7:00 PM</p>
			        <p><strong>Venue:</strong> Lorem Stadium</p>
			        <p><strong>Description:</strong> Lorem Concert is an imaginary concert to demonstrate the working of an NFT ticketing system</p>
			        <p><strong>Ticket Price:</strong> 0.1 BNB</p>
		        </section>
		        <section id="buy-ticket">
			        <h2>Buy Ticket</h2>
			        <form>
				        <label htmlFor="address">ETH Address:</label>
				        <input type="text" id="address" name="address" required></input>
				        <button type="submit">Buy Ticket</button>
			        </form>
		        </section>
	        </main>
        </div>
    )
}

export default Main;
