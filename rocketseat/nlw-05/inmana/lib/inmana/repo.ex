defmodule Inmana.Repo do
  use Ecto.Repo,
    otp_app: :inmana,
    adapter: Ecto.Adapters.Postgres
end
