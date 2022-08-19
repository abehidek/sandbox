defmodule ServerWeb.TodoChannel do
  use ServerWeb, :channel

  @impl true
  def join("todo:lobby", payload, socket) do
    IO.puts("> Joined todo:lobby")
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("ping", payload, socket) do
    IO.puts("> Someone Pinged")
    {:reply, {:ok, %{response: "pong"}}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (todo:lobby).
  @impl true
  def handle_in("shout", payload, socket) do
    broadcast(socket, "shout", payload)
    {:noreply, socket}
  end

  @impl true
  def handle_in("added", payload, socket) do
    IO.inspect("> Someone Added a Todo, payload: #{payload}")
    {:noreply, {:ok, payload},socket}
  end

  @impl true
  def handle_in("add", payload, socket) do
    IO.inspect("> Add a Todo")
    broadcast(socket, "added", payload)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
