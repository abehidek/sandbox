defmodule ServerWeb.TodoChannel do
  use ServerWeb, :channel

  alias Server.Todos
  alias Server.Todos.Todo

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
  def handle_in("ping", _payload, socket) do
    IO.puts("> Someone Pinged")
    {:reply, {:ok, %{response: "pong"}}, socket}
  end

  @impl true
  def handle_in("get", _payload, socket) do
    {:reply, {:ok, %{"todos" => Todos.list_todos()}}, socket}
  end

  @impl true
  def handle_in("switch", %{"todo" => %{"id" => id}}, socket) do
    todo = Todos.get_todo!(id)
    switcher = not Map.fetch!(todo, :completed)
    Todos.update_todo(todo, %{completed: switcher})
    broadcast!(socket, "get", %{"todos" => Todos.list_todos()})
    {:reply, {:ok, %{"todos" => Todos.list_todos()}}, socket}
  end

  @impl true
  def handle_in("add", %{"todo" => todo_params}, socket) do
    IO.inspect("> Add a Todo")

    Todos.create_todo(todo_params)
    broadcast!(socket, "get", %{"todos" => Todos.list_todos()})

    {:noreply, socket}
  end



  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
