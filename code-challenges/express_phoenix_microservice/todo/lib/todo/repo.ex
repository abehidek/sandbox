defmodule Todo.Repo do
  use Ecto.Repo,
    otp_app: :todo,
    adapter: Ecto.Adapters.Postgres
end
