defmodule InmanaWeb.SuppliesController do
  use InmanaWeb, :controller

  alias Inmana.{Supply}
  action_fallback InmanaWeb.FallbackController

  def create(conn, params) do
    with {:ok, %Supply{} = supply} <- Inmana.create_supply(params) do
      conn |> put_status(:created) |> render("create.json", supply: supply)
    end
  end
end
