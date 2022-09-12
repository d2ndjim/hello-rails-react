class Api::V1::MessagesController < ApplicationController
  def index
    @message = Message.order(Arel.sql('RANDOM()')).first
    /api/v1/messages/api/v1/messages
  end
end
