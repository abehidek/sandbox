defmodule TodoWeb.TodoChannel do
  use TodoWeb, :channel

  @impl true
  def join("todo:lobby", payload, socket) do
    if authorized?(payload) do
      {:ok, socket} |> IO.inspect()
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  @impl true
  def handle_in("new_todo", payload, socket) do
    broadcast(socket, "new_todo", payload)
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (todo:lobby).
  @impl true
  def handle_in("shout", payload, socket) do
    broadcast(socket, "shout", payload)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
