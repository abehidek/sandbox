defmodule Inmana.Supplies.Scheduler do
  use GenServer

  alias Inmana.Supplies.ExpirationNotification

  # --- CLIENT

  def start_link(_state) do
    GenServer.start_link(__MODULE__, %{})
  end

  # --- SERVER

  # \\ means default value in elixir
  @impl true
  def init(state \\ %{}) do
    schedule_notification()
    {:ok, state}
  end

  # receives any message
  @impl true
  def handle_info(:generate, state) do
    ExpirationNotification.send()

    schedule_notification()

    {:noreply, state}
  end

  defp schedule_notification do
    Process.send_after(self(), :generate, 1000 * 10)
  end

  # # async
  # def handle_cast({:put, key, value}, state) do
  #   {:noreply, Map.put(state, key, value)}
  # end

  # # sync
  # def handle_call({:get, key}, _from, state) do
  #   {:reply, Map.get(state, key), state}
  # end
end
